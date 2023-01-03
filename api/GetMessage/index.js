module.exports = async function (context, req) {
  const date = "2023-01-03T04:11:14.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

