module.exports = async function (context, req) {
  const date = "2022-02-23T08:11:45.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

