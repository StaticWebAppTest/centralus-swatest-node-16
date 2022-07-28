module.exports = async function (context, req) {
  const date = "2022-07-28T16:16:30.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

