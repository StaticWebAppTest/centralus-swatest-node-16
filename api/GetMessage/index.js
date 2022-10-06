module.exports = async function (context, req) {
  const date = "2022-10-06T09:19:10.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

