module.exports = async function (context, req) {
  const date = "2022-05-24T09:12:09.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

