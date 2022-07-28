module.exports = async function (context, req) {
  const date = "2022-07-28T10:12:15.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

