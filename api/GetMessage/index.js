module.exports = async function (context, req) {
  const date = "2022-04-10T11:09:10.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

