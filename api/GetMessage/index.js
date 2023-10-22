module.exports = async function (context, req) {
  const date = "2023-10-22T09:07:45.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

