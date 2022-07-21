module.exports = async function (context, req) {
  const date = "2022-07-21T08:14:06.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

