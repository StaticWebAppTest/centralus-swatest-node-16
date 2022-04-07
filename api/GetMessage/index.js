module.exports = async function (context, req) {
  const date = "2022-04-07T04:13:06.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

