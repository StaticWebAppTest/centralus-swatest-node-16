module.exports = async function (context, req) {
  const date = "2022-12-10T07:08:25.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

