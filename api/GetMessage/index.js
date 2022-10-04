module.exports = async function (context, req) {
  const date = "2022-10-04T21:12:23.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

