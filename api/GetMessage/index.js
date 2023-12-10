module.exports = async function (context, req) {
  const date = "2023-12-10T06:11:20.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

