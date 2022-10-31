module.exports = async function (context, req) {
  const date = "2022-10-31T17:28:09.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

