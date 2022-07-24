module.exports = async function (context, req) {
  const date = "2022-07-24T18:13:10.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

