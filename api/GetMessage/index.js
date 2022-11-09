module.exports = async function (context, req) {
  const date = "2022-11-09T09:11:40.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

