module.exports = async function (context, req) {
  const date = "2022-03-16T13:16:40.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

