module.exports = async function (context, req) {
  const date = "2023-03-28T19:07:24.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

