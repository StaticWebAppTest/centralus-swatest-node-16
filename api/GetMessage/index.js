module.exports = async function (context, req) {
  const date = "2023-11-24T02:20:07.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

