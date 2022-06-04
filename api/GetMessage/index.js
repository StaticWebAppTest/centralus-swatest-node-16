module.exports = async function (context, req) {
  const date = "2022-06-04T00:52:11.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

