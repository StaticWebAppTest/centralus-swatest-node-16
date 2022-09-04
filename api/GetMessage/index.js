module.exports = async function (context, req) {
  const date = "2022-09-04T06:13:08.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

