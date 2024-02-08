module.exports = async function (context, req) {
  const date = "2024-02-08T11:07:33.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

