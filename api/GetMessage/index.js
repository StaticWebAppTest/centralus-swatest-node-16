module.exports = async function (context, req) {
  const date = "2022-11-04T12:24:25.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

