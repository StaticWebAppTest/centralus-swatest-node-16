module.exports = async function (context, req) {
  const date = "2022-10-04T08:18:33.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

