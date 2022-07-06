module.exports = async function (context, req) {
  const date = "2022-07-06T14:11:24.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

