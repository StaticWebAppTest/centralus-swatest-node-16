module.exports = async function (context, req) {
  const date = "2022-06-27T08:15:06.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

