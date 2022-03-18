module.exports = async function (context, req) {
  const date = "2022-03-18T06:12:45.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

