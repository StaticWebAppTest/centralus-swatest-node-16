module.exports = async function (context, req) {
  const date = "2022-12-27T06:12:12.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

