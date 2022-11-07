module.exports = async function (context, req) {
  const date = "2022-11-07T21:11:15.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

