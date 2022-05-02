module.exports = async function (context, req) {
  const date = "2022-05-02T18:13:25.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

