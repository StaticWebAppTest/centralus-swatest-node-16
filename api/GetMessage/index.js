module.exports = async function (context, req) {
  const date = "2022-10-19T07:37:30.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

