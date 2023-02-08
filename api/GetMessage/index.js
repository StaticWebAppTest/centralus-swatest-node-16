module.exports = async function (context, req) {
  const date = "2023-02-08T17:09:09.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

