module.exports = async function (context, req) {
  const date = "2023-03-09T09:10:50.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

