module.exports = async function (context, req) {
  const date = "2024-02-25T11:06:40.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

