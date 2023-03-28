module.exports = async function (context, req) {
  const date = "2023-03-28T09:09:59.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

