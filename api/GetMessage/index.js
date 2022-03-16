module.exports = async function (context, req) {
  const date = "2022-03-16T20:11:06.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

