module.exports = async function (context, req) {
  const date = "2022-10-03T10:15:01.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

