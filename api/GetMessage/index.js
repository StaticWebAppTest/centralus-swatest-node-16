module.exports = async function (context, req) {
  const date = "2023-05-16T06:11:30.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

