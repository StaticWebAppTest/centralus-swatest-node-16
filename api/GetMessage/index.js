module.exports = async function (context, req) {
  const date = "2022-09-04T18:13:11.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

