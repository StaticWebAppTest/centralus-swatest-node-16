module.exports = async function (context, req) {
  const date = "2023-04-14T06:11:52.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

