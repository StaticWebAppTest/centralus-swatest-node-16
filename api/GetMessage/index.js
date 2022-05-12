module.exports = async function (context, req) {
  const date = "2022-05-12T07:11:13.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

