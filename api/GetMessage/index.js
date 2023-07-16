module.exports = async function (context, req) {
  const date = "2023-07-16T19:07:36.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

