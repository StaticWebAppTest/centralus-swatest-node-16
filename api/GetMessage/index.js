module.exports = async function (context, req) {
  const date = "2022-10-16T13:34:08.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

