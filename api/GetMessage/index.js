module.exports = async function (context, req) {
  const date = "2023-03-16T04:11:52.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

