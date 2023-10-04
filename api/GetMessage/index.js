module.exports = async function (context, req) {
  const date = "2023-10-04T10:09:46.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

