module.exports = async function (context, req) {
  const date = "2022-11-08T09:12:15.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

