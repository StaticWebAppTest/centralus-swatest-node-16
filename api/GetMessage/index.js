module.exports = async function (context, req) {
  const date = "2023-08-20T06:10:09.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

