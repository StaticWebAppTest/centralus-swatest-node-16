module.exports = async function (context, req) {
  const date = "2022-12-04T07:08:10.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

