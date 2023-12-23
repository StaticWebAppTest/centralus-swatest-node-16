module.exports = async function (context, req) {
  const date = "2023-12-23T13:09:24.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

