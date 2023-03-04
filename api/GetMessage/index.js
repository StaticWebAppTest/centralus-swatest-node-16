module.exports = async function (context, req) {
  const date = "2023-03-04T09:09:05.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

