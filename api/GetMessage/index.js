module.exports = async function (context, req) {
  const date = "2023-05-23T06:11:50.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

