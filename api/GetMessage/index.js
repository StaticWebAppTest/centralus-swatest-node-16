module.exports = async function (context, req) {
  const date = "2022-06-09T09:12:48.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

