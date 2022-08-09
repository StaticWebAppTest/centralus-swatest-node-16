module.exports = async function (context, req) {
  const date = "2022-08-09T09:11:33.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

