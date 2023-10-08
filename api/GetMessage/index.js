module.exports = async function (context, req) {
  const date = "2023-10-08T17:07:13.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

